import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
        import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously } 
        from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

        const firebaseConfig = {
            apiKey: "AIzaSyCz-sIkcnwAP9ybbQJT6SchFc5f-KwQkVA",
            authDomain: "indexipiems.firebaseapp.com",
            projectId: "indexipiems",
            storageBucket: "indexipiems.firebasestorage.app",
            messagingSenderId: "71265635437",
            appId: "1:71265635437:web:0924961418ab9e64c38364",
            measurementId: "G-LHR34VV83H"
        };

        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

        document.getElementById('btnLogin').addEventListener('click', () => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    if (user.email.endsWith("@smk-ipiems.sch.id")) {
                        alert("Selamat Datang, Siswa DKV!");
                        window.location.href = "https://dkv2526.vercel.app"; 
                    } else {
                        alert("Selamat Datang, Pengunjung!");
                        window.location.href = "https://dkv2526.vercel.app";
                    }
                })
                .catch((err) => {
                    alert("Gagal Masuk: " + err.message);
                });
        });

        document.getElementById('btnRegister').addEventListener('click', () => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => alert("Akun Berhasil Dibuat! Silakan klik Masuk."))
                .catch((err) => alert("Gagal Daftar: " + err.message));
        });

        document.getElementById('btnGuest').addEventListener('click', () => {
            signInAnonymously(auth)
                .then(() => {
                    alert("Selamat Datang, Tamu!");
                    window.location.href = "https://dkv2526.vercel.app";
                })
                .catch((error) => {
                    alert("Gagal masuk sebagai tamu: " + error.message);
                });
        });
