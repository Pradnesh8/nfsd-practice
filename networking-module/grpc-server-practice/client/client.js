const PATH = './customers.proto';

const grpc = require("@grpc/grpc-js")
const protoLoader = require("@grpc/proto-loader")


const packageDefinition = protoLoader.loadSync(PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
})

const CustomerService = grpc.loadPackageDefinition(packageDefinition).CustomerService;

const client = new CustomerService("127.0.0.1:32435", grpc.credentials.createInsecure())

module.exports = client;