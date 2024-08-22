import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  
  constructor(

  ) {

  }

  @Post()
  createProduct() {
    return 'Crea producto';
  }

  @Get()
  findAllProducts() {
    return 'Todos los productos';
  }

  @Get(':id')
  findOneProduct(@Param('id') id: string) {
    return 'Un solo producto: '+id;
  }

  @Patch(':id')
  patchProduct(
    @Param('id') id: string,
    @Body() body: any
  ) {
    return 'Actualiza producto: '+id;
  }


  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return 'Elimina producto: '+id;
  }
}
