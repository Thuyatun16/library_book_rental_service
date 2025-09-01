import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { Role } from '@client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'The role of the user',
    enum: Role,
    required: false,
  })
  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}
