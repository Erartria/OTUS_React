import { createInterface } from "readline";
import { Calculator } from "./Calculator";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calc = new Calculator();
const question = (): Promise<void> =>
  new Promise((resolve) => {
    rl.question("> ", (answer: string) => {
      let result: number | undefined;
      try {
        result = calc.execute(answer);
      } catch (ex: unknown) {
        if (ex instanceof Error) {
          const msg = `${ex.name ?? "Error"}: ${ex.message ?? ex}`;
          // eslint-disable-next-line no-console
          console.log(msg);
        }
      }

      if (result) {
        // eslint-disable-next-line no-console
        console.log(`Result: ${result}`);
      }

      resolve();
    });
  });

async function app(): Promise<null> {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    await question();
  }
}

app();
