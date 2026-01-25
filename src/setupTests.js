// setupTests.js
import "@testing-library/jest-dom";

// Fix for TextEncoder/TextDecoder issues in Node
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
