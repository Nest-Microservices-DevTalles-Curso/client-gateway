import { CreateOrderDto } from './dto/create-order.dto';
import { ClientProxy } from '@nestjs/microservices';
import { OrderPaginationDto, StatusDto } from './dto';
import { PaginationDto } from 'src/common';
export declare class OrdersController {
    private readonly client;
    constructor(client: ClientProxy);
    create(createOrderDto: CreateOrderDto): import("rxjs").Observable<any>;
    findAll(orderPaginationDto: OrderPaginationDto): import("rxjs").Observable<any>;
    findOne(id: string): Promise<any>;
    getAllByStatus(statusDto: StatusDto, paginationDto: PaginationDto): Promise<import("rxjs").Observable<any>>;
    changeStatus(id: string, statusDto: StatusDto): import("rxjs").Observable<any>;
}
