export default async function handler(req, res) {
  try {
    // Ambil parameter kota dari URL: ?city=Jakarta
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({ error: "Parameter 'city' harus diisi" });
    }

    // Contoh API cuaca gratis (gunakan API key milik kamu)
    const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=id`;

    const response = await fetch(url);
    const data = await response.json();

    // Kalau kota tidak ditemukan
    if (data.cod !== 200) {
      return res.status(404).json({ error: `Kota '${city}' tidak ditemukan` });
    }

    // Kirim hasil dalam format JSON
    res.status(200).json({
      lokasi: data.name,
      suhu: `${data.main.temp}°C`,
      kondisi: data.weather[0].description,
      kelembaban: `${data.main.humidity}%`,
      waktu: new Date().toLocaleString("id-ID"),
    });

  } catch (error) {
    res.status(500).json({ error: "Terjadi kesalahan pada server", detail: error.message });
  }
}
