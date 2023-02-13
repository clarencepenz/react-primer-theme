import {
  Text,
  useTheme,
  NavList,
  PageLayout,
  BaseStyles,
  Box,
  Button,
} from "@primer/react";

function App() {
  const { colorMode, setColorMode } = useTheme();

  return (
    <BaseStyles>
      <PageLayout sx={{ backgroundColor: "bg.primary", height: "100vh" }}>
        <PageLayout.Header
          sx={{
            backgroundColor: "bg.default",
            color: "text.secondary",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
            width: "100%",
            fontSize: 6,
            fontWeight: "bold",
          }}
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Text> Header </Text>
            {colorMode === "dark" ? (
              <Button
                sx={{
                  backgroundColor: "transparent",
                  border: "none",
                  ":hover": "none",
                }}
                onClick={() => setColorMode("light")}
              >
                💡
              </Button>
            ) : (
              <Button
                sx={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => setColorMode("dark")}
              >
                🌑
              </Button>
            )}
          </Box>
        </PageLayout.Header>
        <PageLayout.Pane
          position="start"
          aria-label="Secondary navigation"
          sx={{ backgroundColor: "bg.secondary" }}
        >
          <NavList>
            <NavList.Item
              href="#"
              aria-current="page"
              sx={{ color: "text.primary", fontSize: 3 }}
            >
              Home
            </NavList.Item>
            <NavList.Item
              href="#about"
              sx={{ color: "text.primary", fontSize: 3 }}
            >
              About
            </NavList.Item>
            <NavList.Item
              href="#contact"
              sx={{ color: "text.primary", fontSize: 3 }}
            >
              Contact
            </NavList.Item>
          </NavList>
        </PageLayout.Pane>
        <PageLayout.Content
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            height: "60vh",
            fontSize: 6,
            fontWeight: "bold",
          }}
        >
          <Box
            bg="outline.default"
            color="text.primary"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Text> Content </Text>
          </Box>
        </PageLayout.Content>
        <PageLayout.Footer
          sx={{
            backgroundColor: "bg.default",
            color: "text.secondary",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
            fontSize: 6,
            fontWeight: "bold",
            pb: "20px",
          }}
        >
          <Text> Footer </Text>
        </PageLayout.Footer>
      </PageLayout>
    </BaseStyles>
  );
}

export default App;
