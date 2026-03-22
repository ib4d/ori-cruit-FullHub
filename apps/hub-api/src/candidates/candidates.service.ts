import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@Injectable()
export class CandidatesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.candidate.findMany({ orderBy: { updatedAt: 'desc' } });
  }

  async findOne(id: number) {
    return this.prisma.candidate.findUnique({ where: { id } });
  }

  async create(data: CreateCandidateDto) {
    return this.prisma.candidate.create({ data: data as any });
  }

  async update(id: number, data: UpdateCandidateDto) {
    return this.prisma.candidate.update({ where: { id }, data: data as any });
  }
}
