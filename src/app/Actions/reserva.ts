'use server'

export default async function Reserva (formData: FormData) {
const username = formData.get('username') as string | null;
const usercpf = formData.get('usercpf') as number | null;
console.log(username, usercpf);
}