import { Injectable } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { getFirestore,collection,getDocs, addDoc, doc, updateDoc, arrayUnion, deleteDoc} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAiav-Ek4IHBEjuF59aBx06WG3IEOnTaAM",
  authDomain: "movie-fbd7f.firebaseapp.com",
  projectId: "movie-fbd7f",
  storageBucket: "movie-fbd7f.firebasestorage.app",
  messagingSenderId: "706053708272",
  appId: "1:706053708272:web:cc34af611cedb0a47b2535",
  measurementId: "G-Q0XSZGW8N7"};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  idnumber:any
  firestore: any;
  placeOrder:any=[];
  //get admin user id and pass
  async getAdminIdPass() {
    try {
      const querySnapshot = await getDocs(collection(db, "Admin"));
      const data:any=[];
      querySnapshot.forEach((doc) => {
        data.push({ admindata:doc.data()});});
      return data;} catch (error) {
      console.error("Error fetching data: ", error);
      throw error; // Rethrow the error for further handling
      }}

  //get data
  async getData() {
    try {
      const querySnapshot = await getDocs(collection(db, "Menu"));
      const data :any= [];
      querySnapshot.forEach((doc) => {
        data.push({id: doc.id, 
          menudat:doc.data()});});
      return data;} catch (error) {
      console.error("Error fetching data: ", error);
      throw error; // Rethrow the error for further handling
      }}
  //add new item
      async addData(dd:any){
        try{
        const docRef = await addDoc(collection(db, "Menu"), {
          name : dd.name ,
          price:dd.price,
          category: dd.category });    
        console.log("Document written with ID: ", docRef.id);
        return docRef;}
        catch (error) {
          console.error("Error fetching data: ", error);
          throw error;
      }}

  //update data
  async update(a:any){
    try{
  const updatedata = doc(db,"Menu",a.id);
  await updateDoc(updatedata,{name:a.name, price:a.price,category:a.category,});
      return updatedata;}
      catch (error) {
        console.error("Error updating data: ", error);
        throw error;}
    }
//delete data
async delete(){
  try{
  // await db.delete(a);
  const updatedata1 = doc(db,"Menu",this.idnumber);
   await deleteDoc(updatedata1)
      console.log("Item deleted successfully");
  }
  catch (error) {
    console.error("Error delteting data: ", error);
    throw error;}
}
}
