import express from "express";
import bodyParser from "body-parser";
import { async } from "@firebase/util";
import { db, auth } from "./firebase.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore, query, collection, doc, onSnapshot, addDoc, deleteDoc, updateDoc, where, increment, getDocs, getDoc } from "firebase/firestore"

const router = express.Router();
router.use(bodyParser.json());

router.get("/", (req, res) => {
    res.send("Hello world!");
});

router.post("/api/signup", async(req, res) => {
    let email = req.body.email
    let password = req.body.password
    try {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredintial => {
            res.send(userCredintial)
        }))
    }
    catch(err){
        console.log(err)
    }
})

router.post("api/login", async(req, res) => {
    let email = req.body.email
    let password = req.body.password
    try{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredintial) => {
            const user = userCredintial.user
            const uid = user.uid
            res.send(uid)
        })
        .catch((error) => {
            const errorCode = error.code
            res.send(errorCode)
        })
    }
    catch(err){
        console.log(err)
    }
})

export default router;