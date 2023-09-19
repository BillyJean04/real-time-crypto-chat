"use client";

import { FC } from "react";
import Box from "@mui/material/Box";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import UploadButton from "@/components/uploadButton/UploadButton";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useConversations from "@/hooks/useConversations";

interface FormProps {}

const Form: FC<FormProps> = ({}) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            message: "",
        },
    });
    const { conversationId } = useConversations();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setValue("message", "", { shouldValidate: true });

        fetch("/api/messages", {
            method: "POST",
            body: JSON.stringify({
                ...data,
                conversationId: conversationId,
            }),
        });
    };

    const handleUpload = (result: any) => {
        console.log(result);
        fetch("/api/messages", {
            method: "POST",
            body: JSON.stringify({
                image: result.info.secure_url,
                conversationId: conversationId,
            }),
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box
                padding="10px 0 0 0"
                display="flex"
                flexDirection="row"
                width="100%"
                gap="15px"
            >
                <Box
                    width="100%"
                    display="flex"
                    alignItems="center"
                    color={{
                        color: "gray",
                        border: "1px solid gray",
                        padding: "10px",
                        borderRadius: "7px",
                    }}
                >
                    <UploadButton onUpload={handleUpload}>
                        <AttachFileIcon
                            fontSize="small"
                            sx={{ cursor: "pointer" }}
                        />
                    </UploadButton>
                    <Input
                        id="message"
                        errors={errors}
                        register={register}
                        required
                        placeholder="Type a message"
                        sx={{
                            padding: "0 10px",
                            width: "100%",
                            fontSize: "0.9rem",
                            fontWeight: "300",
                        }}
                    />
                </Box>
                <Button
                    type="submit"
                    sx={{ borderRadius: "10px", padding: "0 15px" }}
                >
                    <SendIcon />
                </Button>
            </Box>
        </form>
    );
};

export default Form;
