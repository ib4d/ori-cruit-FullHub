import { CandidatesService } from './candidates.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
export declare class CandidatesController {
    private readonly candidatesService;
    constructor(candidatesService: CandidatesService);
    getAll(): Promise<{
        id: number;
        email: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        currentTitle: string | null;
        status: import("@prisma/client").$Enums.CandidateStatus;
        notes: string | null;
        ownerId: number | null;
    }[]>;
    getOne(id: string): Promise<{
        id: number;
        email: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        currentTitle: string | null;
        status: import("@prisma/client").$Enums.CandidateStatus;
        notes: string | null;
        ownerId: number | null;
    }>;
    create(body: CreateCandidateDto): Promise<{
        id: number;
        email: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        currentTitle: string | null;
        status: import("@prisma/client").$Enums.CandidateStatus;
        notes: string | null;
        ownerId: number | null;
    }>;
    update(id: string, body: UpdateCandidateDto): Promise<{
        id: number;
        email: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        currentTitle: string | null;
        status: import("@prisma/client").$Enums.CandidateStatus;
        notes: string | null;
        ownerId: number | null;
    }>;
}
