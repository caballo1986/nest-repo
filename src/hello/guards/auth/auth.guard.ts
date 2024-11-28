import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log("🚀 ~ AuthGuard ~ request:", request)
    //if (request.url === '/greet') return false;
    if (!request.headers['authorization']) return false;
    return true;
  }
}