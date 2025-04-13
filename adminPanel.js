import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getFirestore, collection, onSnapshot, updateDoc, doc, deleteDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDzkfiCihtsJ5ip08cx0QySH7UIpdVEKhM",
    authDomain: "e-laerning-1dcc6.firebaseapp.com",
    projectId: "e-laerning-1dcc6",
    storageBucket: "e-laerning-1dcc6.firebasestorage.app",
    messagingSenderId: "1006424759938",
    appId: "1:1006424759938:web:cee85ec89369a138b25e9b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function loadPendingEnrollments() {
    const enrollmentTable = document.getElementById("enrollmentTable");
    enrollmentTable.innerHTML = "";

    const enrollmentsRef = collection(db, "enrollments");
    onSnapshot(enrollmentsRef, (snapshot) => {
        enrollmentTable.innerHTML = ""; 
        snapshot.docs.forEach((docSnap) => {
            let enrollment = docSnap.data();
            if (enrollment.status === "pending") {
                enrollmentTable.innerHTML += `
                    <tr class="border">
                        <td class="border p-2">${enrollment.userId}</td>
                        <td class="border p-2">${enrollment.courseTitle}</td>
                        <td class="border p-2">
                            <button onclick="approveEnrollment('${docSnap.id}')" class="bg-green-500 text-white px-3 py-1 rounded">Approve</button>
                            <button onclick="rejectEnrollment('${docSnap.id}')" class="bg-red-500 text-white px-3 py-1 rounded">Reject</button>
                        </td>
                    </tr>
                `;
            }
        });
    });
}

async function approveEnrollment(enrollmentId) {
    const enrollmentRef = doc(db, "enrollments", enrollmentId);

    // Update the enrollment status to "approved" and add a progress field
    await updateDoc(enrollmentRef, { 
        status: "approved", 
        progress: 0  // Initialize progress to 0%
    });

    alert("Enrollment approved and progress initialized!");
}

function sanitizeEmail(email) {
    return email.replace(/\./g, "_");
}

async function rejectEnrollment(enrollmentId) {
    const enrollmentRef = doc(db, "enrollments", enrollmentId);
    await deleteDoc(enrollmentRef); 
    alert("Enrollment rejected!");
}

window.onload = () => {
    loadPendingEnrollments();
};

window.approveEnrollment = approveEnrollment;
window.rejectEnrollment = rejectEnrollment;
