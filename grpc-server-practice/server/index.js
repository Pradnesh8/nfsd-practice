const PATH = './customers.proto';

const grpc = require("@grpc/grpc-js")
const protoLoader = require("@grpc/proto-loader")


const packageDefinition = protoLoader.loadSync(PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
})

const customersProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();
const customers = [
    {
        id: "1",
        name: "abc",
        age: 24,
        address: "new"
    },
    {
        id: "2",
        name: "xyz",
        age: 24,
        address: "Delhi"
    },
]
server.addService(customersProto.CustomerService.service, {
    getAll: (call, callback) => {
        callback(null, { customers })
    },
    get: (call, callback) => {
        const customer = customers.find(cust => cust.id === call.request.id)
        if (customer) {
            callback(null, customer)
        }
        else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "NOT FOUND"
            })
        }
    },
    insert: (call, callback) => {
        let customer = call.request;
        console.log("customer", customer)
        customer.id = crypto.randomUUID()
        customers.push(customer)
        callback(null, customer);

    },
    update: (call, callback) => {
        const customerId = call.request.id;
        console.log("customer found", customerId)
        const index = customers.findIndex(cust => cust.id === customerId);
        console.log("customer found index", index)
        if (index != -1) {
            console.log("call request", call.request)
            customers[index] = call.request;
            callback(null, call.request);
        }
        else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "NOT FOUND"
            })
        }

    },
    remove: (call, callback) => {
        const customerId = call.request.id;
        const index = customers.findIndex(cust => cust.id === customerId);
        if (index != -1) {
            customers.splice(index, 1)
            callback(null, {});
        }
        else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "NOT FOUND"
            })
        }
    },
})

server.bindAsync("127.0.0.1:32435", grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error("ERROR STARTING GRPC server")
    }
    else {
        server.start()
        console.log("GRPC Server started at port: " + port)
    }
})