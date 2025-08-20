import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@client';

export class UserResponseData {
  @ApiProperty({ description: 'The id of the user' })
  id: string;
  
  @ApiProperty({ description: 'The name of the user' })
  name: string;

  @ApiProperty({ description: 'The email of the user' })
  email: string;

  @ApiProperty({ description: 'The role of the user', enum: Role })
  role: Role;
}

export class ResponseDto {
  @ApiProperty({ description: 'Status message of the operation' })
  message: string;

  @ApiProperty({ description: 'User data (if applicable)', required: false })
  user?: UserResponseData;

  @ApiProperty({ description: 'Authentication token (if applicable)', required: false })
  token?: string;
}