import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.pacienteService.createPaciente(createPacienteDto);
  }

  @Get()
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pacienteService.findOne({ id: Number(id) });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePacienteDto: UpdatePacienteDto,
  ) {
    return this.pacienteService.update({
      id: +id,
      data: updatePacienteDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pacienteService.remove(+id);
  }
}
