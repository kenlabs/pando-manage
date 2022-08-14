import { Container } from "@mui/material";
const PageContainer = ({ children }) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      style={{
        background: "rgba(226, 232, 240, 0.2)",
        height: "100%",
        padding: "24px",
        overflow: "auto",
      }}
    >
      {children}
    </Container>
  );
};
export default PageContainer;
