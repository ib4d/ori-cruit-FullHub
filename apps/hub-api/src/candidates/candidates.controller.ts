import { Controller, Get, Post, Body, Param, Patch, NotFoundException } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Get()
  async getAll() {
    return this.candidatesService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const candidate = await this.candidatesService.findOne(Number(id));
    if (!candidate) {
      throw new NotFoundException('Candidate not found');
    }
    return candidate;
  }

  @Post()
  async create(@Body() body: CreateCandidateDto) {
    return this.candidatesService.create(body);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateCandidateDto) {
    return this.candidatesService.update(Number(id), body);
  }
}
