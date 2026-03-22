import { PrismaService } from '../prisma/prisma.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
export declare class CandidatesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
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
    findOne(id: number): Promise<{
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
    } | null>;
    create(data: CreateCandidateDto): Promise<{
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
    update(id: number, data: UpdateCandidateDto): Promise<{
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
