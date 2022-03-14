import React from "react";
import { Form, message, Modal, Typography } from "antd";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setOperatorBalance } from "../../store/actions";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import ReactInputMask from "react-input-mask";

interface RefillFormProps {
  visible: boolean;
  close: (arg: any) => void;
  id: string | number | undefined;
}

const Error = styled(Typography)`
  color: red;
`;

const StyledMaskInput = styled(ReactInputMask)`
  border-radius: 12px;
  border: '1px solid'
  margin: 5px 0 5px;
  padding: 2px 0 2px 5px;
  width: 100%;
`;

const RefillForm: React.FC<RefillFormProps> = ({ visible, close, id }) => {
  const dispatch = useDispatch();
  const { error } = useTypedSelector((state) => state.operator);
  const refBtn = React.createRef<HTMLButtonElement>();
  const { loading } = useTypedSelector((state) => state.operator);
  const formik = useFormik({
    initialValues: {
      phone: "",
      balance: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .min(16, "Не корректно введено")
        .required("Обязательное поле"),
      balance: Yup.string()
        .min(4, "Не корректно введено")
        .required("Обязательное поле"),
    }),
    onSubmit: (values) => {
      if (formik.isValid) dispatch(setOperatorBalance(id, values));
      if (formik.isSubmitting) {
        message.success(
          `Успешное пополнение номера: ${formik.values.phone} на сумму: ${formik.values.balance}`
        );
        formik.resetForm();
        close(true);
        window.history.back();
      } else if (error) {
        message.error("Ошибка");
      }
    },
    validateOnChange: true,
  });

  return (
    <Modal
      title="Пополнение баланса"
      visible={visible}
      confirmLoading={loading}
      onCancel={close}
      bodyStyle={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "10px",
      }}
      okButtonProps={{
        onClick: () => refBtn.current?.click(),
      }}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={(e) => message.success(e)}
        onFinishFailed={(err) => message.error(err)}
        onSubmitCapture={formik.handleSubmit}
      >
        <label htmlFor="phone">
          <Typography>Телефон:</Typography>
          <StyledMaskInput
            mask="+7 999 999 99 99"
            id="phone"
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <Error>{formik.errors.phone}</Error>
          ) : null}
        </label>
        <label htmlFor="balance">
          <Typography>Сумма пополнения:</Typography>
          <StyledMaskInput
            mask="9999"
            maskPlaceholder="____"
            id="balance"
            type="tel"
            name="balance"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.balance}
          />
          {formik.touched.balance && formik.errors.balance ? (
            <Error>{formik.errors.balance}</Error>
          ) : null}
        </label>
        <label style={{ display: "none" }}>
          <button ref={refBtn} type="submit">
            Пополнить
          </button>
        </label>
      </Form>
    </Modal>
  );
};

export default RefillForm;
