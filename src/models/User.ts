import mongoose from 'mongoose';

const GeoSchema = new mongoose.Schema({
  lat: String,
  lng: String
}, { _id: false });

const AddressSchema = new mongoose.Schema({
  street: String,
  suite: String,
  city: String,
  zipcode: String,
  geo: GeoSchema
}, { _id: false });

const CompanySchema = new mongoose.Schema({
  name: String,
  catchPhrase: String,
  bs: String
}, { _id: false });


const CommentSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  body: String
}, { _id: false });

const PostSchema = new mongoose.Schema({
  id: Number,
  title: String,
  body: String,
  comments: [CommentSchema]
}, { _id: false });

const UserSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  username: String,
  email: String,
  address: AddressSchema,
  phone: String,
  website: String,
  company: CompanySchema,
  posts: [PostSchema]
});

export default mongoose.model('User', UserSchema);
