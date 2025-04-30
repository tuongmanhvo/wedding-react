// components/RSVPForm.tsx
'use client'
import { useState } from "react";
type RSVPResponse = {
  message: string;
};


export default function RSVPForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: 1,
    requests: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const url="/api/rsvp";
    const url="http://127.0.0.1:4000/api/rsvp";

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = (await res.json()) as RSVPResponse;
    setStatus(data.message);
  };

  return (
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 rounded-2xl shadow space-y-4 ">
        <input name="name" required placeholder="Tên khách mời" className="w-full border p-2 rounded" onChange={handleChange} />
        {/* <input name="email" type="email" placeholder="Email Address" className="w-full border p-2 rounded" onChange={handleChange} /> */}
        <select name="attending" className="w-full border p-2 rounded" onChange={handleChange}>
          <option value="yes">Sẽ dự tiệc</option>
          <option value="no">Không dự tiệc</option>
        </select>
        <input name="guests" type="number" min={1} className="w-full border p-2 rounded" placeholder="Tổng số người dự" onChange={handleChange} />
        <textarea name="requests" placeholder="Yêu cầu riêng? Ví dụ: món chay..." className="w-full border p-2 rounded" onChange={handleChange} />
        <button type="submit" className="w-full submitBtnColor text-white p-2 rounded font-semibold cursor-pointer">Xác nhận</button>
        {status && <p className="text-green-600">{status}</p>}
      </form>
  );
}
