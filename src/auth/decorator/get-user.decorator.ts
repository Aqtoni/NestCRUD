import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();

    // data is the paramter passed to the decorator
    if (data) {
      return request.user[data];
    }
    return request.user;
  },
);
