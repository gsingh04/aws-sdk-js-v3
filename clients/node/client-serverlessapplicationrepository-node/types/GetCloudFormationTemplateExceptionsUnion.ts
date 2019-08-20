import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
export type GetCloudFormationTemplateExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException
  | BadRequestException
  | InternalServerErrorException
  | ForbiddenException;