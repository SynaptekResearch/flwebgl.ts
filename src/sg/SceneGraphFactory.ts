/// <reference path="../Context.ts" />
/// <reference path="MovieClip.ts" />
/// <reference path="Shape.ts" />

module flwebgl.sg
{
  import Context = flwebgl.Context;

  export class SceneGraphFactory
  {
    context: Context;
    nextAvailableID: number;

    constructor(context: Context, nextAvailableID: number) {
      this.context = context;
      this.nextAvailableID = nextAvailableID;
    }

    createMovieClipInstance(linkageName: string): MovieClip {
      var timeline = this.context.assetPool.getTimelineByName(linkageName);
      return (!timeline || timeline.isScene) ? void 0 : this.createMovieClip(timeline.id, "-1");
    }

    createMovieClip(timelineID: string, mcID: string): MovieClip {
      var mc = new MovieClip();
      mc.context = this.context;
      if (timelineID !== void 0) {
        mc.setDefinition(this.context.assetPool.getTimeline(timelineID));
      }
      mc.id = mcID;
      return mc;
    }

    createShape(meshID: string, shapeID: string): Shape {
      var shape = new Shape();
      shape.setDefinition(this.context.assetPool.getMesh(meshID));
      shape.id = shapeID;
      return shape;
    }

    // rm
    getNextAvailableID(): number {
      return this.nextAvailableID++;
    }
  }
}