import * as React from "react";
import {
  Html,
  Head,
  Font,
  Container,
  Button,
  Heading,
} from "@react-email/components";

export const EmailTemplate = ({ name, email, message }) => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <title>Adrian Pantea Portfolio</title>
      </Head>
      <Container style={styles.container}>
        <Heading style={styles.heading}>
          Hi, you've received an email from {name}
        </Heading>

        <div style={styles.formContainer}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name:</label>
            <div style={styles.input}>{name}</div>
          </div>

          {/* <div style={styles.formGroup}>
            <label style={styles.label}>Last name:</label>
            <div style={styles.input}></div>
          </div> */}

          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <div style={styles.input}>{email}</div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Message:</label>
            <div style={styles.input}>{message}</div>
          </div>
        </div>
        <Button href={`mailto:${email}`} style={styles.button}>
          Respond
        </Button>
      </Container>
    </Html>
  );
};

const styles = {
  container: {
    background: "#000000",
    color: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "start",
    fontFamily: "Roboto, sans-serif",
    width: "500px",
  },
  button: {
    background: "#6C63FF",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    display: "inline-block",
    marginTop: "20px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: "20px",
  },
  formContainer: {
    background: "#333333",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
    textAlign: "left",
  },
  formGroup: {
    marginBottom: "15px",
    color: "#ffffff",
  },
  label: {
    fontWeight: "bold",
    display: "block",
    marginBottom: "5px",
    color: "#ffffff",
  },
  input: {
    background: "#444444",
    color: "#ffffff",
    padding: "10px",
    borderRadius: "5px",
    display: "block",
    width: "100%",
    boxSizing: "border-box",
  },
};