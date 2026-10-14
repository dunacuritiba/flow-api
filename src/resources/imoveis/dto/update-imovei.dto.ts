import { PartialType } from '@nestjs/swagger';
import { CreateImoveisDto } from './create-imovei.dto';

export class UpdateImoveisDto extends PartialType(CreateImoveisDto) {}
