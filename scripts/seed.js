import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const reportSchema = new mongoose.Schema({
  brand: String,
  date: String,
  po: String,
  productCode: String,
  quantities: {
    S: Number,
    M: Number,
    L: Number,
    XL: Number,
    '2XL': Number,
    '3XL': Number,
    '4XL': Number
  },
  finish: String,
  status: { type: String, default: 'PASS' },
  unitName: String,
  qamName: String,
  createdAt: { type: Date, default: Date.now }
});

const Report = mongoose.model('Report', reportSchema);

const sampleReports = [
  {
    brand: 'MANIAC',
    date: '2026-05-01',
    po: 'HA_25-26_710',
    productCode: 'JC24-VST-RN-LS-BLK_GRN-ATHLETE',
    quantities: { S: 10, M: 20, L: 30, XL: 25, '2XL': 15, '3XL': 5, '4XL': 2 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  },
  {
    brand: 'TEXTRACK',
    date: '2026-05-01',
    po: 'PO-8822-ABC',
    productCode: 'TX-TS-01-WHITE',
    quantities: { S: 50, M: 60, L: 55, XL: 40, '2XL': 20, '3XL': 10, '4XL': 5 },
    finish: 'PENDING',
    status: 'PASS',
    unitName: 'UNIT-A',
    qamName: 'SURESH'
  },
  {
    brand: 'MANIAC',
    date: '2026-04-30',
    po: 'HA_25-26_711',
    productCode: 'JC24-HD-RN-LS-NVY',
    quantities: { S: 15, M: 25, L: 35, XL: 20, '2XL': 10, '3XL': 4, '4XL': 1 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  },
  {
    brand: 'BRAND-X',
    date: '2026-05-01',
    po: 'BX-990-PQR',
    productCode: 'BX-POLO-02',
    quantities: { S: 100, M: 120, L: 110, XL: 80, '2XL': 50, '3XL': 20, '4XL': 10 },
    finish: 'IN-PROGRESS',
    status: 'FAIL',
    unitName: 'UNIT-B',
    qamName: 'RAJESH'
  },
  {
    brand: 'MANIAC',
    date: '2026-04-29',
    po: 'HA_25-26_712',
    productCode: 'JC24-VST-RN-SS-RED',
    quantities: { S: 8, M: 18, L: 28, XL: 15, '2XL': 10, '3XL': 3, '4XL': 1 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  },
  {
    brand: 'TEXTRACK',
    date: '2026-04-28',
    po: 'TX-551-XYZ',
    productCode: 'TX-JKT-04-BLACK',
    quantities: { S: 30, M: 40, L: 35, XL: 25, '2XL': 15, '3XL': 8, '4XL': 3 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'UNIT-A',
    qamName: 'SURESH'
  },
  {
    brand: 'MANIAC',
    date: '2026-05-02',
    po: 'HA_25-26_713',
    productCode: 'JC24-CRW-RN-LS-GRY',
    quantities: { S: 12, M: 22, L: 32, XL: 18, '2XL': 12, '3XL': 6, '4XL': 2 },
    finish: 'READY',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  },
  {
    brand: 'URBAN-F',
    date: '2026-05-01',
    po: 'UF-102-LMN',
    productCode: 'UF-TEE-99',
    quantities: { S: 200, M: 250, L: 220, XL: 150, '2XL': 80, '3XL': 30, '4XL': 15 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'UNIT-C',
    qamName: 'KUMAR'
  },
  {
    brand: 'MANIAC',
    date: '2026-04-27',
    po: 'HA_25-26_714',
    productCode: 'JC24-VST-RN-LS-WHT',
    quantities: { S: 20, M: 30, L: 40, XL: 30, '2XL': 20, '3XL': 10, '4XL': 5 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  },
  {
    brand: 'SPORTS-X',
    date: '2026-05-01',
    po: 'SX-505-ABC',
    productCode: 'SX-TRK-01',
    quantities: { S: 40, M: 50, L: 45, XL: 35, '2XL': 25, '3XL': 12, '4XL': 6 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'UNIT-D',
    qamName: 'VIJAY'
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB Atlas for seeding');
    
    await Report.insertMany(sampleReports);
    console.log('Successfully seeded 10 reports');
    
    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedDB();
