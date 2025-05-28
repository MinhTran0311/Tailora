import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';

@ApiTags('jobs')
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new job posting' })
  @ApiResponse({
    status: 201,
    description: 'The job has been successfully created.',
    type: Job,
  })
  create(@Body() createJobDto: CreateJobDto) {
    return this.jobsService.create(createJobDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all job postings' })
  @ApiResponse({ status: 200, description: 'Return all jobs.', type: [Job] })
  findAll() {
    return this.jobsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a job posting by id' })
  @ApiResponse({ status: 200, description: 'Return the job.', type: Job })
  @ApiResponse({ status: 404, description: 'Job not found.' })
  findOne(@Param('id') id: string) {
    return this.jobsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a job posting' })
  @ApiResponse({
    status: 200,
    description: 'The job has been successfully updated.',
    type: Job,
  })
  @ApiResponse({ status: 404, description: 'Job not found.' })
  update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto) {
    return this.jobsService.update(id, updateJobDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a job posting' })
  @ApiResponse({
    status: 200,
    description: 'The job has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Job not found.' })
  remove(@Param('id') id: string) {
    return this.jobsService.remove(id);
  }
}
