import { Request, Response } from "express";
import { GetJobUseCase } from "./GetJobUseCase.useCase";
import { container } from "tsyringe";

export class GetJobController {
    async handle(req: Request, res: Response): Promise<Response> {

        const {locations, keyword, description} = req.body

        const getJobUseCase = container.resolve(GetJobUseCase)

        await getJobUseCase.execute(locations, keyword, description)

        return res.status(201).json({ message: "Jobs collected from linkedin successfully"});
    }
}