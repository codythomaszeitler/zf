import { z } from 'zod';
import { genLogExceptionIfOccurs } from '../errorUtils';

const apexLogResultSchema = z.object({
    Id: z.string(), // eslint-disable-line 
    LogLength: z.number(), // eslint-disable-line 
    DurationMilliseconds: z.number(), // eslint-disable-line 
    Application: z.string(), // eslint-disable-line 
    Status: z.string(), // eslint-disable-line 
    StartTime: z.string(), // eslint-disable-line 
    Operation: z.string(), // eslint-disable-line
    LogUser: z.object({// eslint-disable-line
        Name: z.string()// eslint-disable-line
    })
});

const apexListLogResultSchema = z.object({
    result: z.array(apexLogResultSchema)
});

export type ApexListLogResult = z.infer<typeof apexListLogResultSchema>;
export type ApexLogResult = z.infer<typeof apexLogResultSchema>;

export function intoApexListLogResult(cliOutput: unknown) {
    const func = genLogExceptionIfOccurs((cliOutputJson: unknown) => {
        return apexListLogResultSchema.parse(cliOutputJson);
    });
    return func(cliOutput);
}