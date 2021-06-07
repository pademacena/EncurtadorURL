import mongoose from "mongoose";

const mConnect = "string de conexao mongodb";

export default function connectMongo() {
  mongoose.connect(mConnect, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}