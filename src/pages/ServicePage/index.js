import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import TopLayout from "pages/utils/TopLayout";


export default function ServicePage() {
  return (
    <>
      <TopLayout/>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.5),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { info } }) => info,
        }}
      >
        
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
