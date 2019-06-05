import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {IdeaAnchorDirective} from '../../directives/idea-anchor.directive';
import {Post} from '../../classes/post';
import {IdeaNodeComponent} from '../idea-node/idea-node.component';
import {IdeasService} from '../../services/ideas/ideas.service';

@Component({
  selector: 'app-idea-forum',
  templateUrl: './idea-forum.component.html',
  styleUrls: ['./idea-forum.component.scss']
})
export class IdeaForumComponent implements OnInit {

  @ViewChild(IdeaAnchorDirective) ideaAnchor: IdeaAnchorDirective;

  private posts: Post[];

  constructor(
    private ideasService: IdeasService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.loadPosts();
    this.ideasService.postUpdateEmitter.subscribe(() => {
        this.loadPosts();
    });
  }

  loadPosts() {
    this.ideasService.getPostsObservable().subscribe((posts: Post[]) => {
      this.posts = posts;
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(IdeaNodeComponent);
      const viewContainerRef = this.ideaAnchor.viewContainerRef;
      viewContainerRef.clear();

      const componentRefs = [];
      this.posts.forEach((post) => {
        this.ideasService.getCommentsObservable(post).subscribe((comments: Comment[]) => {
          post.comments = comments || [];
          const componentRef = viewContainerRef.createComponent(componentFactory);
          componentRefs.push(componentRef);
          (componentRef.instance as IdeaNodeComponent).post = post;
        });
      });
    });
  }
}
