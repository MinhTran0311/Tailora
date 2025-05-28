import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateJobDto {
  @ApiProperty({ description: 'The title of the job' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'The company offering the job' })
  @IsString()
  @IsNotEmpty()
  company: string;

  @ApiProperty({ description: 'The location of the job' })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({ description: 'The job description' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'The job requirements', required: false })
  @IsString()
  @IsOptional()
  requirements?: string;

  @ApiProperty({ description: 'The job benefits', required: false })
  @IsString()
  @IsOptional()
  benefits?: string;

  @ApiProperty({ description: 'The job salary', required: false })
  @IsString()
  @IsOptional()
  salary?: string;
}
