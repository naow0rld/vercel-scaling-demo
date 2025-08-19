export default function handler(req, res) {
  const data = {
    namaLengkap: "Shazia eL Hamid",
    namaPanggilan: "Shazia",
    kelas: "XII SIJA B",
    NIS: "21204",
    noPresensi: 28,
    mapel: "Platform as a Service",
  };

  const html = `
    <html>
      <head>
        <title>Identitas Shazia</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #74ebd5, #ACB6E5);
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
          }
          .card {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            width: 350px;
            text-align: center;
          }
          h2 {
            margin-bottom: 15px;
            color: #333;
          }
          p {
            margin: 5px 0;
            font-size: 16px;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>Identitas Siswa</h2>
          <p><b>Nama Lengkap:</b> ${data.namaLengkap}</p>
          <p><b>Nama Panggilan:</b> ${data.namaPanggilan}</p>
          <p><b>Kelas:</b> ${data.kelas}</p>
          <p><b>NIS:</b> ${data.NIS}</p>
          <p><b>No Presensi:</b> ${data.noPresensi}</p>
          <p><b>Mapel:</b> ${data.mapel}</p>
        </div>
      </body>
    </html>
  `;

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
