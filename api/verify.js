export default async function handler(req, res) {
    const { email, link } = req.query;
    const apikey = "dkf_7a6a25db";
    const targetUrl = `https://am-prem.vxz.my.id/api/verify?email=${email}&link=${encodeURIComponent(link)}&apply=true&apikey=${apikey}`;

    try {
        const response = await fetch(targetUrl);
        const data = await response.json();
        return res.status(response.status).json(data);
    } catch (error) {
        return res.status(500).json({ message: "Gagal terhubung ke server utama" });
    }
}
