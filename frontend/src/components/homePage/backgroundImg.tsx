import Image from 'next/image';
import styles from './backgroundImg.module.scss';

export default function BackgroundImage() {
    return (
        <>
            <Image
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1874&q=80"
                alt="Background Image"
                fill={true}
                style={{ objectFit: 'cover' }}
                className=""
            />
            <span className="imgMask"></span>
        </>
    );
}