import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from "@mui/material";
import authContent from "../content/auth.json";

type Field = {
  label: string;
  placeholder: string;
  required: boolean;
  type: string;
  value?: string;
};

type Agreement = {
  label: string;
  description: string;
};

type Screen = {
  title: string;
  subtitle: string;
  fields: Field[];
  agreements?: Agreement[];
  submit: string;
  secondaryAction: string;
};

const screens = authContent.screens as Record<"login" | "register", Screen>;

function AuthForm({ screen }: { screen: Screen }) {
  return (
    <Card sx={{ width: "100%", maxWidth: 460, borderRadius: 4 }}>
      <CardContent sx={{ p: 4 }}>
        <Stack spacing={2.5}>
          <Stack spacing={0.5}>
            <Typography variant="h5" fontWeight={700}>
              {screen.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {screen.subtitle}
            </Typography>
          </Stack>

          <Stack spacing={2}>
            {screen.fields.map((field) => (
              <TextField
                key={field.label}
                label={field.required ? `${field.label} *` : field.label}
                placeholder={field.placeholder}
                type={field.type === "password" && !field.value?.includes("•") ? "password" : "text"}
                defaultValue={field.value ?? ""}
                InputLabelProps={{ shrink: !!field.value }}
                fullWidth
              />
            ))}
          </Stack>

          {!!screen.agreements?.length && (
            <Stack spacing={1}>
              {screen.agreements.map((agreement) => (
                <FormControlLabel
                  key={agreement.label}
                  control={<Checkbox />}
                  label={
                    <Box>
                      <Typography variant="body2">{agreement.label}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {agreement.description}
                      </Typography>
                    </Box>
                  }
                />
              ))}
            </Stack>
          )}

          <Stack spacing={1.5}>
            <Button variant="contained" size="large" fullWidth>
              {screen.submit}
            </Button>
            <Button variant="text" fullWidth>
              {screen.secondaryAction}
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("register");
  const screen = useMemo(() => screens[mode], [mode]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        p: 3,
        background:
          "radial-gradient(circle at 10% 0%, rgba(25,118,210,0.15), transparent 35%), #f6f8fc"
      }}
    >
      <Stack spacing={2} alignItems="center" sx={{ width: "100%", maxWidth: 460 }}>
        <Tabs
          value={mode}
          onChange={(_, value) => setMode(value)}
          sx={{ bgcolor: "background.paper", borderRadius: 99, px: 1 }}
        >
          <Tab value="login" label="Вход" />
          <Tab value="register" label="Регистрация" />
        </Tabs>
        <AuthForm screen={screen} />
      </Stack>
    </Box>
  );
}

export default AuthPage;
