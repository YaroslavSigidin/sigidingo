import { Box, Button, Chip, Container, Paper, Stack, Typography } from "@mui/material";
import trainingContent from "../content/training.json";

const TOKENS = {
  bgA: "#f0f6ff",
  bgB: "#eefcf5",
  shell: "#0f1727",
  shellBorder: "#2a3654",
  panel: "#111d32",
  panelSoft: "#172743",
  textMain: "#eef4ff",
  textMute: "#8fa4c7",
  mint: "#1f9f8f",
  mintSoft: "#1f9f8f33",
  amber: "#c57c1a",
  amberSoft: "#c57c1a33",
  red: "#d55757",
  redSoft: "#d5575733"
};

type Card = {
  badge: string;
  title: string;
  subtitle: string;
};

function badgeColor(value: string) {
  if (/не сдан/i.test(value)) {
    return { text: TOKENS.red, bg: TOKENS.redSoft, border: "#d5575788" };
  }
  if (value === "5") {
    return { text: TOKENS.amber, bg: TOKENS.amberSoft, border: "#c57c1a88" };
  }
  return { text: TOKENS.mint, bg: TOKENS.mintSoft, border: "#1f9f8f88" };
}

function HeroModule() {
  const data = trainingContent;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 5,
        border: `1px solid ${TOKENS.shellBorder}`,
        background: "linear-gradient(125deg, #162746 0%, #101a2d 70%)"
      }}
    >
      <Stack direction={{ xs: "column", lg: "row" }} spacing={3} justifyContent="space-between">
        <Stack spacing={1.2} maxWidth={860}>
          <Typography sx={{ fontSize: { xs: 42, md: 78 }, lineHeight: 0.95, color: TOKENS.textMain, fontWeight: 800 }}>
            {data.course.title}
          </Typography>
          <Typography sx={{ color: TOKENS.textMute, fontSize: { xs: 18, md: 24 } }}>{data.course.description}</Typography>
          <Chip
            label={data.course.access}
            sx={{
              width: "fit-content",
              color: TOKENS.mint,
              bgcolor: TOKENS.mintSoft,
              border: "1px solid #1f9f8f88",
              fontWeight: 700
            }}
          />
        </Stack>

        <Paper
          elevation={0}
          sx={{
            minWidth: 260,
            p: 2.5,
            borderRadius: 4,
            border: `1px solid ${TOKENS.shellBorder}`,
            bgcolor: TOKENS.panel
          }}
        >
          <Typography sx={{ color: TOKENS.textMute, fontSize: 14 }}>Система статусов</Typography>
          <Typography sx={{ color: TOKENS.textMain, fontSize: 36, fontWeight: 800, lineHeight: 1.05, mt: 1 }}>
            7 направлений
          </Typography>
          <Box
            sx={{
              mt: 2,
              height: 8,
              borderRadius: 99,
              background: "linear-gradient(90deg, #1f9f8f 0 60%, #2d3f66 60% 100%)"
            }}
          />
          <Typography sx={{ color: TOKENS.textMute, mt: 1, fontSize: 13 }}>Динамическая зона контроля прогресса</Typography>
        </Paper>
      </Stack>
    </Paper>
  );
}

function PrimaryCard({ item, index }: { item: Card; index: number }) {
  const palette = badgeColor(item.badge);
  const gradients = [
    "linear-gradient(145deg, #192b4d 0%, #111c31 100%)",
    "linear-gradient(145deg, #2f2548 0%, #161d37 100%)",
    "linear-gradient(145deg, #3e2525 0%, #1a2033 100%)"
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        position: "relative",
        overflow: "hidden",
        flex: 1,
        minWidth: 250,
        p: 2.5,
        height: 320,
        borderRadius: 4,
        border: `1px solid ${TOKENS.shellBorder}`,
        bgcolor: TOKENS.panelSoft,
        backgroundImage: gradients[index] || gradients[0]
      }}
    >
      <Chip
        label={item.badge}
        sx={{
          color: palette.text,
          bgcolor: palette.bg,
          border: `1px solid ${palette.border}`,
          fontWeight: 700
        }}
      />
      <Typography sx={{ mt: 2.5, color: TOKENS.textMain, fontSize: 42, lineHeight: 0.95, fontWeight: 800 }}>{item.title}</Typography>
      <Typography sx={{ mt: 1, color: TOKENS.textMute, fontSize: 19 }}>{item.subtitle}</Typography>
      <Box
        sx={{
          position: "absolute",
          right: -36,
          bottom: -36,
          width: 180,
          height: 180,
          borderRadius: "50%",
          border: "1px solid #ffffff20",
          background: "radial-gradient(circle, #ffffff22 0%, #ffffff00 60%)"
        }}
      />
    </Paper>
  );
}

function StatusCard({ item }: { item: Card }) {
  const palette = badgeColor(item.badge);

  return (
    <Paper
      elevation={0}
      sx={{
        flex: 1,
        minWidth: 220,
        p: 2,
        height: 260,
        borderRadius: 3,
        border: `1px solid ${TOKENS.shellBorder}`,
        bgcolor: TOKENS.panel,
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Chip
        label={item.badge}
        sx={{
          color: palette.text,
          bgcolor: palette.bg,
          border: `1px solid ${palette.border}`,
          fontWeight: 700
        }}
      />
      <Typography sx={{ mt: 2, color: TOKENS.textMain, fontSize: 40, lineHeight: 0.95, fontWeight: 800 }}>{item.title}</Typography>
      <Typography sx={{ mt: 1, color: TOKENS.textMute, fontSize: 16 }}>{item.subtitle}</Typography>
      <Box
        sx={{
          position: "absolute",
          left: 24,
          bottom: 20,
          width: 130,
          height: 6,
          borderRadius: 99,
          bgcolor: palette.text,
          opacity: 0.38
        }}
      />
    </Paper>
  );
}

export default function TrainingDashboardPage() {
  const data = trainingContent;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 5,
        background: `radial-gradient(circle at 0% 0%, ${TOKENS.bgA} 0%, transparent 44%), radial-gradient(circle at 100% 100%, ${TOKENS.bgB} 0%, transparent 38%), #edf3ff`
      }}
    >
      <Container maxWidth="xl">
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 6,
            border: `1px solid ${TOKENS.shellBorder}`,
            bgcolor: TOKENS.shell,
            boxShadow: "0 30px 80px rgba(10,18,35,.28)"
          }}
        >
          <Stack spacing={3}>
            <Paper
              elevation={0}
              sx={{
                p: 1.4,
                borderRadius: 3,
                border: `1px solid ${TOKENS.shellBorder}`,
                bgcolor: TOKENS.panel,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Chip label={data.header.user} sx={{ color: TOKENS.textMain, bgcolor: TOKENS.panelSoft, border: `1px solid ${TOKENS.shellBorder}` }} />
              <Stack direction="row" spacing={1}>
                <Button variant="outlined" sx={{ color: TOKENS.textMain, borderColor: TOKENS.shellBorder }}>
                  {data.header.settings}
                </Button>
                <Button variant="contained" sx={{ bgcolor: TOKENS.mint, color: "#06231f" }}>
                  {data.header.logout}
                </Button>
              </Stack>
            </Paper>

            <HeroModule />

            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              {data.topCards.map((item, idx) => (
                <PrimaryCard key={item.title} item={item} index={idx} />
              ))}
            </Stack>

            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              {data.bottomCards.map((item) => (
                <StatusCard key={item.title} item={item} />
              ))}
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
