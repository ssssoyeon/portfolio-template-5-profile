const tl = gsap.timeline({
    duration: .5
})

tl.to('#s1 .img_wrap', {
    opacity: 1,
    x: 30
})

tl.to('#s1 .img_wrap .name', {
    opacity: 1,
    x: 10
})

tl.to('.pf-con h3', {
    opacity: 1,
    x: 10,
    stagger: .2
})

tl.to('.pf-con dl dt', {
    opacity: 1,
    x: 10,
    //stagger:.1
})

tl.to('.pf-con dl dd ', {
    opacity: 1,
    x: 10,
    stagger: .1
})

// span과 pg_wrap이 동시에 나타남
tl.add("skills") 
    .to('.skill_list li span', {
        opacity: 1,
        x: 10,
        stagger: 0.2
    }, "skills") 
    .to('.skill_list li .pg_wrap', { 
        opacity: 1,
        x: 10,
        stagger: 0.2
    }, "skills") 
    .to('.skill_list li .pg', { 
        width: '70%',
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2
    });
