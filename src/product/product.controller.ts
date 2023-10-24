import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, UpdatedProductDto } from './dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('product')
@ApiTags('product')
export class ProductController {
    constructor(private productService: ProductService){}
    @Get('getProducts/:page/:limit')
    getProducts(@Param('page') page:number, @Param('limit') limit:number){
        return this.productService.getProducts(page, limit);
    }

    @Get('getProductById/:id')
    getProductById(@Param('id') id:number){
        return this.productService.getOneProduct(id);
    }

    @Post('createProduct')
    createProduct(@Body() newProduct:CreateProductDto){
        return this.productService.createProduct(newProduct);
    }

    @Put('updateProduct/:id')
    updateProduct(@Param('id') id:number, @Body() updatedProduct:UpdatedProductDto){
        return this.productService.updateProduct(updatedProduct, id);
    }

    @Delete('deleteProduct/:id')
    deleteProduct(@Param('id') id:number){
        return this.productService.deleteProduct(id);
    }
}
