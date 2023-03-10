import { Modal, useMantineTheme } from '@mantine/core';
import css from '../styles/OrderModal.module.css';
import { useState } from 'react';
import { createOrder } from '../lib/orderHandler';
import toast, { Toaster } from 'react-hot-toast';
import { useStore } from '../store/store';
// import { Router }from 'next/router';
import { useRouter } from 'next/router';
// import handleSubmit from 'next';
// import { useForm } from 'react-hook-form';
export default function OrderModal({ opened, setOpened, PaymentMethod }) {
    const theme = useMantineTheme();
    const router = useRouter();
    const [FormData, setFormdata] = useState({})

    const handleInput = (e) => {
        setFormdata({ ...FormData, [e.target.name]: e.target.value })
    }

    const resetCart = useStore((state) => state.resetCart)
    const total = typeof window !== 'undefined' && localStorage.getItem('total')

    // const { register, handleSubmit } = useForm();
    const handleSubmit =(e) => {
        e.preventDefault();
        const id = createOrder({ ...FormData, total, PaymentMethod })
        toast.success("Order placed");
        resetCart();
        {
            typeof window !== 'undefined' && localStorage.setItem('Order', id)
        }
        router.push(`/order/${id}`)
    };

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={opened}
            onClose={() => setOpened(null)}
        >
            {/* Modal content */}
            <form action="" className={css.formContainer}>
                <input onChange={handleInput} type="text" name="name" required placeholder="Name" />
                <input onChange={handleInput} type="text" name="phone" required placeholder="Phone Number" />
                <textarea onChange={handleInput} name="address" rows={3} placeholder='Address'></textarea>
                <span>
                    You will pay  <span>$ {total}</span> on delivery
                </span>

                <button type="submit" className='btn'>Place Order</button>
            </form>
            <Toaster />
        </Modal>
    )
}