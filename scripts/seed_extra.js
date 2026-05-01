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

const extraReports = [
  {
    brand: 'MANIAC',
    date: '2026-05-03',
    po: 'HA_25-26_001',
    productCode: 'GYMFIT LS 2P',
    quantities: { S: 100, M: 200, L: 200, XL: 200, '2XL': 100, '3XL': 100, '4XL': 100 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  },
  {
    brand: 'MANIAC',
    date: '2026-05-03',
    po: 'HA_25-26_001',
    productCode: 'GYMFIT LS 2P',
    quantities: { S: 100, M: 200, L: 200, XL: 200, '2XL': 100, '3XL': 100, '4XL': 100 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  },
  {
    brand: 'MANIAC',
    date: '2026-05-03',
    po: 'HA_25-26_001',
    productCode: 'GYMFIT LS 2P',
    quantities: { S: 100, M: 200, L: 200, XL: 200, '2XL': 100, '3XL': 100, '4XL': 100 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  },
  {
    brand: 'MANIAC',
    date: '2026-05-03',
    po: 'HA_25-26_001',
    productCode: 'GYMFIT LS 2P',
    quantities: { S: 100, M: 200, L: 200, XL: 200, '2XL': 100, '3XL': 100, '4XL': 100 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  },
  {
    brand: 'MANIAC',
    date: '2026-05-03',
    po: 'HA_25-26_001',
    productCode: 'GYMFIT LS 2P',
    quantities: { S: 100, M: 200, L: 200, XL: 200, '2XL': 100, '3XL': 100, '4XL': 100 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  },
  {
    brand: 'MANIAC',
    date: '2026-05-03',
    po: 'HA_25-26_001',
    productCode: 'GYMFIT LS 2P',
    quantities: { S: 100, M: 200, L: 200, XL: 200, '2XL': 100, '3XL': 100, '4XL': 100 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  },
  {
    brand: 'MANIAC',
    date: '2026-05-03',
    po: 'HA_25-26_001',
    productCode: 'GYMFIT LS 2P',
    quantities: { S: 100, M: 200, L: 200, XL: 200, '2XL': 100, '3XL': 100, '4XL': 100 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  },
  {
    brand: 'MANIAC',
    date: '2026-05-03',
    po: 'HA_25-26_001',
    productCode: 'GYMFIT LS 2P',
    quantities: { S: 100, M: 200, L: 200, XL: 200, '2XL': 100, '3XL': 100, '4XL': 100 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  },
  {
    brand: 'MANIAC',
    date: '2026-05-03',
    po: 'HA_25-26_001',
    productCode: 'GYMFIT LS 2P',
    quantities: { S: 100, M: 200, L: 200, XL: 200, '2XL': 100, '3XL': 100, '4XL': 100 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  },
  {
    brand: 'MANIAC',
    date: '2026-05-03',
    po: 'HA_25-26_001',
    productCode: 'GYMFIT LS 2P',
    quantities: { S: 100, M: 200, L: 200, XL: 200, '2XL': 100, '3XL': 100, '4XL': 100 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  },
  {
    brand: 'MANIAC',
    date: '2026-05-03',
    po: 'HA_25-26_001',
    productCode: 'GYMFIT LS 2P',
    quantities: { S: 100, M: 200, L: 200, XL: 200, '2XL': 100, '3XL': 100, '4XL': 100 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  },
  {
    brand: 'MANIAC',
    date: '2026-05-03',
    po: 'HA_25-26_001',
    productCode: 'GYMFIT LS 2P',
    quantities: { S: 100, M: 200, L: 200, XL: 200, '2XL': 100, '3XL': 100, '4XL': 100 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  },

  {
    brand: 'TEXTRACK',
    date: '2026-05-03',
    po: 'TX-9988-ZZZ',
    productCode: 'TX-SOCKS-WHITE',
    quantities: { S: 500, M: 500, L: 500, XL: 0, '2XL': 0, '3XL': 0, '4XL': 0 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'UNIT-A',
    qamName: 'SURESH'
  },
  {
    brand: 'MANIAC',
    date: '2026-05-04',
    po: 'HA_25-26_002',
    productCode: 'JC24-SWT-RN-LS-GRY',
    quantities: { S: 25, M: 35, L: 45, XL: 30, '2XL': 15, '3XL': 10, '4XL': 5 },
    finish: 'PENDING',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  },
  {
    brand: 'BRAND-Z',
    date: '2026-05-04',
    po: 'BZ-4433-ABC',
    productCode: 'BZ-CARGO-KHAKI',
    quantities: { S: 40, M: 40, L: 40, XL: 40, '2XL': 20, '3XL': 10, '4XL': 5 },
    finish: 'IN-PROGRESS',
    status: 'PASS',
    unitName: 'UNIT-E',
    qamName: 'ANAND'
  },
  {
    brand: 'MANIAC',
    date: '2026-05-05',
    po: 'HA_25-26_003',
    productCode: 'JC24-VST-RN-LS-NAVY',
    quantities: { S: 50, M: 50, L: 50, XL: 50, '2XL': 50, '3XL': 25, '4XL': 10 },
    finish: 'COMPLETED',
    status: 'PASS',
    unitName: 'HA',
    qamName: 'GANESH'
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected for extra seeding');
    await Report.insertMany(extraReports);
    console.log('Successfully seeded 5 extra reports');
    await mongoose.connection.close();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedDB();
