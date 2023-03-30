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

router.post("/api/login", async(req, res) => {
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


router.post("/api/order", async(req, res) => {
    try{
        let name = req.body.name
        let email = req.body.email
        let ktp = req.body.ktp
        let uid = req.body.uid
        let nohp = req.body.nohp
        let alamat = req.body.alamat
        let privateKey = req.body.private

                // cek apakah ktp bernilai null atau tidak valid
        if (!ktp || typeof ktp !== 'string') {
          ktp = '' // atur nilai default jika ktp bernilai null atau tidak valid
        }

        const docRef = await addDoc(collection(db, "Event"), {
            uid: uid,
            email: email,
            name: name,
            ktp: ktp,
            nohp: nohp,
            alamat: alamat,
            privateKey: privateKey
        })
        res.status(200).send(docRef.id)
    }
    catch(err){
        res.status(500).send(err)
        console.log(err)
    }
})

router.get("/api/order/:id", async(req, res) => {
    try{
        const docSnapshot = await getDoc(doc(db, "Event", req.params.id))
        console.log(docSnapshot);
        if(docSnapshot.exists()){
            res.send(docSnapshot.data())
        }
        else{
            res.status(404).send("Document not found")
        }
    }
    catch(err){
        console.log(err)
    }
})

export default router;
