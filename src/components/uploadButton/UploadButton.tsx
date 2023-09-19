"use client";

import { FC } from "react";
import { CldUploadButton, CldUploadButtonProps } from "next-cloudinary";

import styles from "./style.module.css";

const UploadButton: FC<CldUploadButtonProps> = ({ children, ...props }) => {
    return (
        <CldUploadButton
            {...props}
            className={styles.uploadButton}
            uploadPreset="xhps969i"
        >
            {children}
        </CldUploadButton>
    );
};

export default UploadButton;
