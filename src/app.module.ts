import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ArtworkModule } from './artwork/artwork.module';
import { VoteModule } from './vote/vote.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://gaellegoyonpro:Nvxemb3*@cluster0.l1q81ia.mongodb.net/ArtistAwards'),
    UserModule,
    ArtworkModule,
    VoteModule,
  ],
})
export class AppModule {}
