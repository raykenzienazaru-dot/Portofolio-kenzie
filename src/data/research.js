// Titles and years come from the actual PDF covers. Dates are document dates, not award dates.
const pdf = (
  id,
  title,
  subtitle,
  year,
  pages,
  bytes,
  kind = "KTI",
  role = "Contributing author",
) => ({
  id,
  title,
  description: subtitle,
  year,
  pages,
  bytes,
  kind,
  role,
  file: `/documents/${id}.pdf`,
  thumbnail: `/images/research/${id}.webp`,
});

export const documents = [
  pdf(
    "eduinsight",
    "EduInsight AI",
    "UI/UX proposal · INACOMP 2.0, Universitas Negeri Jakarta. An interactive learning concept with gamification and teacher analytics.",
    "2026",
    46,
    1467358,
    "PROPOSAL",
    "Research & Development (R&D) · Team NAVI",
  ),
  pdf(
    "sofia-farming",
    "SOFIA · Organic Farming",
    "Pemuda Pelopor research on IoT monitoring for agricultural storage, with environmental sensors and AI logic.",
    "2026",
    43,
    1564580,
    "KTI",
    "Author",
  ),
  pdf(
    "gws",
    "Garuda Water Sanitation",
    "Water quality and sanitation monitoring using IoT and AI logic, with a focus on environmental health.",
    "2026",
    51,
    2026714,
  ),
  pdf(
    "air-cek",
    "AIR.CEK",
    "School water-quality analysis through a website using pH, TDS and AI logic.",
    "2026",
    29,
    748339,
  ),
  pdf(
    "sigeta",
    "SIGETA",
    "Gas monitoring and the effectiveness of tawas. A national scientific-writing submission for Automation Week 8.",
    "2025",
    41,
    1328430,
  ),
  pdf(
    "sigema",
    "SIGEMA",
    "IoT monitoring of silica gel effectiveness in a storage cabinet.",
    "2025",
    21,
    1251632,
    "KTI",
    "Writer · Team research",
  ),
  pdf(
    "lumina",
    "LUMINA",
    "Lunch Management IoT Next-Gen App. An innovation proposal by team SATORU.",
    "2025",
    20,
    932535,
    "PROPOSAL",
  ),
  pdf(
    "sofia-office",
    "SOFIA · Smart Office",
    "Smart Office and Facility Intelligence Assistant. A school research paper on connected facility monitoring.",
    "2026",
    20,
    487472,
  ),
  pdf(
    "balap-sa",
    "BALAP-SA",
    "Bantal Alam Alami Pemanfaatan Serabut Kelapa. A presentation on a natural coconut-fibre pillow.",
    null,
    11,
    2305341,
    "KTI",
    "Team project",
  ),
];

const sensor = "https://github.com/raykenzienazaru-dot/datasetminotoring";
export const researchAssets = [
  {
    id: "sensor-dataset",
    title: "DATASET_SENSOR.zip",
    kind: "DATASET",
    format: "ZIP",
    description:
      "Sensor dataset archive in the plant-monitoring research repository. The README describes literature-informed synthetic data, not field observations.",
    url: `${sensor}/blob/main/dataset_disease1/DATASET_SENSOR.zip`,
    tags: ["Synthetic data", "Temperature", "Humidity", "Soil moisture"],
  },
  {
    id: "home-dataset",
    title: "home.zip",
    kind: "DATASET",
    format: "ZIP",
    description:
      "An additional dataset archive kept in the sensor-monitoring repository. Open the source to inspect its contents.",
    url: `${sensor}/blob/main/dataset/home.zip`,
    tags: ["Research archive", "Dataset"],
  },
  {
    id: "disease-dataset",
    title: "archive (3).zip",
    kind: "DATASET",
    format: "ZIP",
    description:
      "A dataset archive in the plant-monitoring repository's dataset_disease directory, available alongside the sensor and model experiments.",
    url: `${sensor}/blob/main/dataset_disease/archive%20(3).zip`,
    tags: ["Dataset archive"],
  },
  {
    id: "sensor-int8",
    title: "Sensor monitoring · INT8 model",
    kind: "MODEL",
    format: "TFLITE",
    description:
      "A quantized model for experimental environmental classification using temperature, air humidity and soil moisture.",
    url: `${sensor}/blob/main/models/modelsensorminotoring.tflite`,
    tags: ["TensorFlow Lite", "INT8", "Synthetic-data training"],
  },
  {
    id: "grenvis-model",
    title: "GRENVIS · Sensor model bundle",
    kind: "MODEL",
    format: "KERAS / TFLITE / C",
    description:
      "Keras, TensorFlow Lite and C-header artifacts for embedded sensor-model experiments.",
    url: `${sensor}/tree/main/models`,
    tags: ["Keras", "Embedded AI", "Model artifacts"],
  },
  {
    id: "vision-model",
    title: "AI VISION · Leaf model bundle",
    kind: "MODEL",
    format: "KERAS / TFLITE",
    description:
      "Leaf-classification model artifacts for the AI VISION testing project, with Healthy, Powdery and Rust outputs.",
    url: "https://github.com/raykenzienazaru-dot/AI_VISION/tree/main/models",
    tags: ["Computer vision", "TensorFlow Lite"],
  },
  {
    id: "sigeta-schema",
    title: "SIGETA · Sensor CSV schema",
    kind: "DATASET",
    format: "CSV TEMPLATE",
    description:
      "A header-only CSV template: timestamp, mq, temperature, humidity and status. It currently contains no observation rows.",
    url: "https://github.com/raykenzienazaru-dot/sigeta-ai/blob/main/sensor_data.csv",
    tags: ["Schema only", "No observations"],
  },
  {
    id: "grenvis-firmware",
    title: "GRENVIS · ESP32 firmware",
    kind: "FIRMWARE",
    format: "ARDUINO / C++",
    description:
      "ESP32 firmware for sensor reading, ESP-NOW and MQTT, plus a simulated vision-data test sender. The README documents unfinished integrations.",
    url: "https://github.com/raykenzienazaru-dot/AI-dasboard/tree/main/firmware",
    tags: ["ESP32", "ESP-NOW", "MQTT", "Prototype"],
  },
];

export const unj = {
  title: "EduInsight AI",
  event: "UI/UX Design Competition · INACOMP 2.0",
  organizer: "Universitas Negeri Jakarta",
  year: "2026",
  role: "Research & Development (R&D)",
  team: "NAVI",
  prototype:
    "https://www.figma.com/proto/TV1aEmsbIKgVCmC8jKS0nO/EdulsightAI?node-id=9-91&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A91&show-proto-sidebar=1",
};
