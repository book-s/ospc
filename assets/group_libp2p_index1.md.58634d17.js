import{_ as s,c as n,o as a,a as l}from"./app.a7d8838a.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"libp2p","slug":"libp2p","link":"#libp2p","children":[]},{"level":2,"title":"Transports (Go) 传输层","slug":"transports-go-传输层","link":"#transports-go-传输层","children":[]},{"level":2,"title":"NAT Traversal(Go)  NAT穿透层","slug":"nat-traversal-go-nat穿透层","link":"#nat-traversal-go-nat穿透层","children":[]},{"level":2,"title":"Secure Communication(Go)  安全通信层","slug":"secure-communication-go-安全通信层","link":"#secure-communication-go-安全通信层","children":[]},{"level":2,"title":"Discovery(Go) 发现层","slug":"discovery-go-发现层","link":"#discovery-go-发现层","children":[]},{"level":2,"title":"Peer Routing(Go) 对等路由层","slug":"peer-routing-go-对等路由层","link":"#peer-routing-go-对等路由层","children":[]},{"level":2,"title":"Publish/Subscribe(Go)  发布/订阅","slug":"publish-subscribe-go-发布-订阅","link":"#publish-subscribe-go-发布-订阅","children":[]},{"level":2,"title":"Stream Multiplexing(Go) 多路复用","slug":"stream-multiplexing-go-多路复用","link":"#stream-multiplexing-go-多路复用","children":[]},{"level":2,"title":"Storage(Go)  存储","slug":"storage-go-存储","link":"#storage-go-存储","children":[]},{"level":2,"title":"General Purpose Utilities & Datatypes(Go)  通用使用程序和数据类型","slug":"general-purpose-utilities-datatypes-go-通用使用程序和数据类型","link":"#general-purpose-utilities-datatypes-go-通用使用程序和数据类型","children":[]}],"relativePath":"group/libp2p/index1.md"}'),p={name:"group/libp2p/index1.md"},e=l(`<h2 id="libp2p" tabindex="-1">libp2p <a class="header-anchor" href="#libp2p" aria-hidden="true">#</a></h2><h2 id="transports-go-传输层" tabindex="-1">Transports (Go) 传输层 <a class="header-anchor" href="#transports-go-传输层" aria-hidden="true">#</a></h2><ul><li>libp2p-tcp</li><li>libp2p-websockets</li></ul><h2 id="nat-traversal-go-nat穿透层" tabindex="-1">NAT Traversal(Go) NAT穿透层 <a class="header-anchor" href="#nat-traversal-go-nat穿透层" aria-hidden="true">#</a></h2><ul><li>libp2p-circuit-relay-v1</li><li>libp2p-circuit-relay-v2</li><li>libp2p-autonat</li><li>libp2p-hole-punching</li><li>libp2p-dcutr</li></ul><h2 id="secure-communication-go-安全通信层" tabindex="-1">Secure Communication(Go) 安全通信层 <a class="header-anchor" href="#secure-communication-go-安全通信层" aria-hidden="true">#</a></h2><ul><li>libp2p-noise</li><li>libp2p-tls</li></ul><h2 id="discovery-go-发现层" tabindex="-1">Discovery(Go) 发现层 <a class="header-anchor" href="#discovery-go-发现层" aria-hidden="true">#</a></h2><ul><li>bootstrap</li><li>random-walk</li><li>mdns-discovery</li></ul><h2 id="peer-routing-go-对等路由层" tabindex="-1">Peer Routing(Go) 对等路由层 <a class="header-anchor" href="#peer-routing-go-对等路由层" aria-hidden="true">#</a></h2><ul><li>libp2p-kad-dht</li><li>libp2p-kbucket</li></ul><h2 id="publish-subscribe-go-发布-订阅" tabindex="-1">Publish/Subscribe(Go) 发布/订阅 <a class="header-anchor" href="#publish-subscribe-go-发布-订阅" aria-hidden="true">#</a></h2><ul><li>libp2p-floodsub</li><li>libp2p-gossipsub</li></ul><h2 id="stream-multiplexing-go-多路复用" tabindex="-1">Stream Multiplexing(Go) 多路复用 <a class="header-anchor" href="#stream-multiplexing-go-多路复用" aria-hidden="true">#</a></h2><ul><li>libp2p-quic</li><li>libp2p-mplex</li><li>libp2p-yamux</li></ul><h2 id="storage-go-存储" tabindex="-1">Storage(Go) 存储 <a class="header-anchor" href="#storage-go-存储" aria-hidden="true">#</a></h2><ul><li>libp2p-record</li></ul><h2 id="general-purpose-utilities-datatypes-go-通用使用程序和数据类型" tabindex="-1">General Purpose Utilities &amp; Datatypes(Go) 通用使用程序和数据类型 <a class="header-anchor" href="#general-purpose-utilities-datatypes-go-通用使用程序和数据类型" aria-hidden="true">#</a></h2><ul><li>libp2p-crypto</li><li>libp2p-ping</li><li>libp2p-peer 对等体</li><li>libp2p-swarm</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">├── CHANGELOG.md</span></span>
<span class="line"><span style="color:#A6ACCD;">├── LICENSE</span></span>
<span class="line"><span style="color:#A6ACCD;">├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">├── ROADMAP.md</span></span>
<span class="line"><span style="color:#A6ACCD;">├── config</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── config.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── config_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── log.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── quic_stateless_reset.go</span></span>
<span class="line"><span style="color:#A6ACCD;">├── core</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── alias.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── canonicallog</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── canonicallog.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── canonicallog_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── connmgr</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── decay.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── gater.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── manager.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── null.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── presets.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── control</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── disconnect.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── crypto</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── bench_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── ecdsa.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── ecdsa_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── ed25519.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── ed25519_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── fixture_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── key.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── key_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── key_to_stdlib.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── pb</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── crypto.pb.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── crypto.proto</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── rsa_common.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── rsa_go.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── rsa_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── secp256k1.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── secp256k1_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── test_data</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── 0.priv</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── 0.pub</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── 0.sig</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── 2.priv</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── 2.pub</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── 2.sig</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── 3.priv</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── 3.pub</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       └── 3.sig</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── discovery</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── discovery.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── options.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── event</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── addrs.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── bus.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── dht.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── doc.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── identify.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── nattype.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── network.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── protocol.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── reachability.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── host</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── helpers.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── host.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── internal</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── catch</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── catch.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       └── catch_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── metrics</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── bandwidth.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── bandwidth_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── reporter.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── network</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── conn.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── context.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── context_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── errors.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── mocks</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── mock_conn_management_scope.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── mock_peer_scope.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── mock_protocol_scope.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── mock_resource_manager.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── mock_stream_management_scope.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── network.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── mux.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── nattype.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── network.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── notifee.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── notifee_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── rcmgr.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── stream.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── peer</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── addrinfo.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── addrinfo_serde.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── addrinfo_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── pb</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── peer_record.pb.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── peer_record.proto</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── peer.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── peer_serde.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── peer_serde_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── peer_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── record.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── record_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── peerstore</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── helpers.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── peerstore.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── pnet</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── codec.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── codec_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── env.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── error.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── error_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── protector.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── protocol</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── id.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── switch.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── record</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── envelope.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── envelope_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── pb</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── envelope.pb.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── envelope.proto</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── record.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── record_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── routing</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── options.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── query.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── query_serde.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── query_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── routing.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── sec</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── insecure</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── insecure.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── insecure_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── pb</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │       ├── plaintext.pb.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │       └── plaintext.proto</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── security.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── test</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── addrs.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── crypto.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── errors.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── peer.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── transport</span></span>
<span class="line"><span style="color:#A6ACCD;">│       └── transport.go</span></span>
<span class="line"><span style="color:#A6ACCD;">├── dashboards</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── autonat</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── autonat.json</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── eventbus</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── eventbus.json</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── identify</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── identify.json</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── relaysvc</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── relaysvc.json</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── resource-manager</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── resource-manager.json</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── swarm</span></span>
<span class="line"><span style="color:#A6ACCD;">│       └── swarm.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├── defaults.go</span></span>
<span class="line"><span style="color:#A6ACCD;">├── examples</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── chat</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── chat.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── chat_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── chat-with-mdns</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── flags.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── main.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── mdns.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── chat-with-rendezvous</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── chat.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── flags.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── echo</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── main.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── main_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── go.mod</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── go.sum</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── http-proxy</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── proxy.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── ipfs-camp-2019</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 01-Transports</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── main.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 02-Multiaddrs</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── main.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 03-Muxing-Encryption</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── main.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 05-Discovery</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── main.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── protocol.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 06-Pubsub</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── main.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── protocol.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 07-Messaging</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── chat.pb.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── chat.proto</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── main.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── protocol.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── pubsub.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── 08-End</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── chat.pb.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── chat.proto</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── main.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── protocol.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── pubsub.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── go.mod</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── go.sum</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── libp2p-host</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── host.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── host_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── multipro</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── AUTHORS</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── LICENSE</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── echo.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── main.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── main_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── node.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── pb</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── p2p.pb.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── p2p.proto</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── ping.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── pubsub</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── basic-chat-with-rendezvous</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── go.mod</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── go.sum</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── main.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── chat</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── chat-example.gif</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── chatroom.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── go.mod</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── go.sum</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── main.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       └── ui.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── relay</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── main.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── main_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── routed-echo</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── bootstrap.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── main.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── testutils</span></span>
<span class="line"><span style="color:#A6ACCD;">│       ├── logharness.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       └── net.go</span></span>
<span class="line"><span style="color:#A6ACCD;">├── go.mod</span></span>
<span class="line"><span style="color:#A6ACCD;">├── go.sum</span></span>
<span class="line"><span style="color:#A6ACCD;">├── libp2p.go</span></span>
<span class="line"><span style="color:#A6ACCD;">├── libp2p_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">├── limits.go</span></span>
<span class="line"><span style="color:#A6ACCD;">├── options.go</span></span>
<span class="line"><span style="color:#A6ACCD;">├── options_filter.go</span></span>
<span class="line"><span style="color:#A6ACCD;">├── p2p</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── discovery</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── backoff</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── backoff.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── backoff_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── backoffcache.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── backoffcache_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── backoffconnector.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── backoffconnector_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── mdns</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── mdns.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── mdns_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── mocks</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── mocks.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── routing</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── routing.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── routing_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── util</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       └── util.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── host</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── autonat</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── autonat.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── autonat_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── client.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── dialpolicy.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── dialpolicy_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── interface.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── metrics.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── metrics_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── notify.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── options.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── pb</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── autonat.pb.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   └── autonat.proto</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── proto.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── svc.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── svc_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── test</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │       ├── autonat_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │       └── dummy.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── autorelay</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── addrsplosion.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── addrsplosion_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── autorelay.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── autorelay_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── host.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── options.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── relay.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── relay_finder.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── basic</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── basic_host.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── basic_host_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── natmgr.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── blank</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── blank.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── eventbus</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── basic.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── basic_metrics.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── basic_metrics_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── basic_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── opts.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── peerstore</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── metrics.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── metrics_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── peerstore.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── pstoreds</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── addr_book.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── addr_book_gc.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── addr_book_gc_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── cache.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── cyclic_batch.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── ds_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── keybook.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── metadata.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── pb</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   │   ├── pstore.pb.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   │   └── pstore.proto</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── peerstore.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   └── protobook.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── pstoremem</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── addr_book.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── inmem_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── keybook.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── metadata.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── peerstore.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── protobook.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── sorting.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   └── sorting_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── test</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │       ├── addr_book_suite.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │       ├── benchmarks_suite.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │       ├── keybook_suite.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │       ├── peerstore_suite.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │       └── utils.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── pstoremanager</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── mock_peerstore_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── pstoremanager.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── pstoremanager_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── relaysvc</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── relay.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── relay_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── resource-manager</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── allowlist.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── allowlist_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── docs</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   └── allowlist.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── error.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── extapi.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── limit.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── limit_config_test.backwards-compat.json</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── limit_config_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── limit_config_test.json</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── limit_defaults.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── limit_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── metrics.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── obs</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── noalloc_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── stats.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   └── stats_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── rcmgr.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── rcmgr_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── scope.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── scope_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── sys_not_unix.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── sys_unix.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── sys_windows.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── trace.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── routed</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── routed.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       └── routed_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── metricshelper</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── dir.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── pool.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── pool_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── registerer.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── registerer_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── muxer</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── mplex</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── conn.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── stream.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── transport.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── transport_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── testsuite</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── mux.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── yamux</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── conn.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── stream.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── transport.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       └── transport_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── net</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── conngater</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── conngater.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── conngater_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── connmgr</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── bench_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── connmgr.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── connmgr_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── decay.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── decay_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── options.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── watchdog_cgo.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── watchdog_no_cgo.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── mock</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── complement.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── interface.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── log2.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── mock.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── mock_conn.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── mock_link.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── mock_net.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── mock_notif_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── mock_peernet.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── mock_printer.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── mock_stream.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── mock_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── ratelimiter.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── nat</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── mapping.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── nat.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── pnet</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── protector.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── psk_conn.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── psk_conn_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── reuseport</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── dial.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── dialer.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── listen.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── reuseport.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── reuseport_plan9.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── reuseport_posix.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── reuseport_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── transport.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── transport_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── swarm</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── addrs.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── dial_error.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── dial_sync.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── dial_sync_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── dial_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── dial_worker.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── dial_worker_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── limiter.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── limiter_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── peers_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── simul_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── swarm.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── swarm_addr.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── swarm_addr_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── swarm_conn.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── swarm_dial.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── swarm_dial_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── swarm_event_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── swarm_listen.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── swarm_metrics.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── swarm_metrics_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── swarm_net_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── swarm_notif_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── swarm_stream.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── swarm_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── swarm_transport.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── testing</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── testing.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   └── testing_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── transport_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── util_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── upgrader</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── conn.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── gater_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── listener.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── listener_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── threshold.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── upgrader.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       └── upgrader_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── protocol</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── circuitv2</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── client</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── client.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── conn.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── dial.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── handlers.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── listen.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── reservation.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── reservation_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   └── transport.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── pb</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── circuit.pb.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── circuit.proto</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── voucher.pb.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   └── voucher.proto</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── proto</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── protocol.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── voucher.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   └── voucher_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── proto.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── relay</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── acl.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── constraints.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── constraints_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── metrics.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── metrics_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── options.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── relay.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── relay_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   └── resources.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── util</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │       ├── io.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │       └── pbconv.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── holepunch</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── filter.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── holepunch_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── holepuncher.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── pb</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── holepunch.pb.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   └── holepunch.proto</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── svc.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── tracer.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── util.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── identify</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── id.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── id_glass_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── id_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── metrics.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── metrics_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── obsaddr.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── obsaddr_glass_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── obsaddr_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── opts.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── pb</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── identify.pb.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   └── identify.proto</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── user_agent.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── ping</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── ping.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       └── ping_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── security</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── noise</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── LICENSE.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── benchmark_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── crypto.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── crypto_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── handshake.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── pb</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   ├── payload.pb.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   │   └── payload.proto</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── rw.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── session.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── session_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── session_transport.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── transport.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── transport_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── tls</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── LICENSE.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── cmd</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       │   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       │   ├── tlsdiag</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       │   │   ├── client.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       │   │   ├── key.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       │   │   └── server.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       │   └── tlsdiag.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── conn.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── crypto.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── crypto_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── extension.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── extension_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       ├── transport.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       └── transport_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── test</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── backpressure</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── backpressure.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── backpressure_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── negotiation</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── muxer_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── security_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── notifications</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── notification_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── quic</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── quic_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── reconnects</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── reconnect.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── reconnect_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── resource-manager</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── echo.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── echo_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── rcmgr_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── webtransport</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       └── webtransport_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── transport</span></span>
<span class="line"><span style="color:#A6ACCD;">│       ├── quic</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── cmd</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   │   ├── client</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   │   │   └── main.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   │   └── server</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   │       └── main.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── conn.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── conn_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── listener.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── listener_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── mock_connection_gater_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── stream.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── transport.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── transport_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   └── virtuallistener.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       ├── quicreuse</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── config.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── connmgr.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── connmgr_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── listener.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── options.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── quic_multiaddr.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── quic_multiaddr_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── reuse.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── reuse_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── tracer.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── tracer_metrics.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   └── tracer_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       ├── tcp</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── metrics.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── metrics_darwin.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── metrics_general.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── metrics_linux.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── metrics_windows.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── reuseport.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── tcp.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   └── tcp_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       ├── testsuite</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── stream_suite.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── transport_suite.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   └── utils_suite.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       ├── websocket</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── LICENSE-APACHE</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── LICENSE-MIT</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── addrs.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── addrs_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── conn.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── listener.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   ├── websocket.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   └── websocket_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│       └── webtransport</span></span>
<span class="line"><span style="color:#A6ACCD;">│           ├── cert_manager.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│           ├── cert_manager_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│           ├── conn.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│           ├── crypto.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│           ├── crypto_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│           ├── listener.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│           ├── mock_connection_gater_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│           ├── multiaddr.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│           ├── multiaddr_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│           ├── noise_early_data.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│           ├── stream.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│           ├── transport.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│           └── transport_test.go</span></span>
<span class="line"><span style="color:#A6ACCD;">├── package-list.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├── scripts</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── mkreleaselog</span></span>
<span class="line"><span style="color:#A6ACCD;">├── test-plans</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── PingDockerfile</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── cmd</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── ping</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │       └── main.go</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── go.mod</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── go.sum</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── ping-version.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├── tools.go</span></span>
<span class="line"><span style="color:#A6ACCD;">└── version.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br><span class="line-number">367</span><br><span class="line-number">368</span><br><span class="line-number">369</span><br><span class="line-number">370</span><br><span class="line-number">371</span><br><span class="line-number">372</span><br><span class="line-number">373</span><br><span class="line-number">374</span><br><span class="line-number">375</span><br><span class="line-number">376</span><br><span class="line-number">377</span><br><span class="line-number">378</span><br><span class="line-number">379</span><br><span class="line-number">380</span><br><span class="line-number">381</span><br><span class="line-number">382</span><br><span class="line-number">383</span><br><span class="line-number">384</span><br><span class="line-number">385</span><br><span class="line-number">386</span><br><span class="line-number">387</span><br><span class="line-number">388</span><br><span class="line-number">389</span><br><span class="line-number">390</span><br><span class="line-number">391</span><br><span class="line-number">392</span><br><span class="line-number">393</span><br><span class="line-number">394</span><br><span class="line-number">395</span><br><span class="line-number">396</span><br><span class="line-number">397</span><br><span class="line-number">398</span><br><span class="line-number">399</span><br><span class="line-number">400</span><br><span class="line-number">401</span><br><span class="line-number">402</span><br><span class="line-number">403</span><br><span class="line-number">404</span><br><span class="line-number">405</span><br><span class="line-number">406</span><br><span class="line-number">407</span><br><span class="line-number">408</span><br><span class="line-number">409</span><br><span class="line-number">410</span><br><span class="line-number">411</span><br><span class="line-number">412</span><br><span class="line-number">413</span><br><span class="line-number">414</span><br><span class="line-number">415</span><br><span class="line-number">416</span><br><span class="line-number">417</span><br><span class="line-number">418</span><br><span class="line-number">419</span><br><span class="line-number">420</span><br><span class="line-number">421</span><br><span class="line-number">422</span><br><span class="line-number">423</span><br><span class="line-number">424</span><br><span class="line-number">425</span><br><span class="line-number">426</span><br><span class="line-number">427</span><br><span class="line-number">428</span><br><span class="line-number">429</span><br><span class="line-number">430</span><br><span class="line-number">431</span><br><span class="line-number">432</span><br><span class="line-number">433</span><br><span class="line-number">434</span><br><span class="line-number">435</span><br><span class="line-number">436</span><br><span class="line-number">437</span><br><span class="line-number">438</span><br><span class="line-number">439</span><br><span class="line-number">440</span><br><span class="line-number">441</span><br><span class="line-number">442</span><br><span class="line-number">443</span><br><span class="line-number">444</span><br><span class="line-number">445</span><br><span class="line-number">446</span><br><span class="line-number">447</span><br><span class="line-number">448</span><br><span class="line-number">449</span><br><span class="line-number">450</span><br><span class="line-number">451</span><br><span class="line-number">452</span><br><span class="line-number">453</span><br><span class="line-number">454</span><br><span class="line-number">455</span><br><span class="line-number">456</span><br><span class="line-number">457</span><br><span class="line-number">458</span><br><span class="line-number">459</span><br><span class="line-number">460</span><br><span class="line-number">461</span><br><span class="line-number">462</span><br><span class="line-number">463</span><br><span class="line-number">464</span><br><span class="line-number">465</span><br><span class="line-number">466</span><br><span class="line-number">467</span><br><span class="line-number">468</span><br><span class="line-number">469</span><br><span class="line-number">470</span><br><span class="line-number">471</span><br><span class="line-number">472</span><br><span class="line-number">473</span><br><span class="line-number">474</span><br><span class="line-number">475</span><br><span class="line-number">476</span><br><span class="line-number">477</span><br><span class="line-number">478</span><br><span class="line-number">479</span><br><span class="line-number">480</span><br><span class="line-number">481</span><br><span class="line-number">482</span><br><span class="line-number">483</span><br><span class="line-number">484</span><br><span class="line-number">485</span><br><span class="line-number">486</span><br><span class="line-number">487</span><br><span class="line-number">488</span><br><span class="line-number">489</span><br><span class="line-number">490</span><br><span class="line-number">491</span><br><span class="line-number">492</span><br><span class="line-number">493</span><br><span class="line-number">494</span><br><span class="line-number">495</span><br><span class="line-number">496</span><br><span class="line-number">497</span><br><span class="line-number">498</span><br><span class="line-number">499</span><br><span class="line-number">500</span><br><span class="line-number">501</span><br><span class="line-number">502</span><br><span class="line-number">503</span><br><span class="line-number">504</span><br><span class="line-number">505</span><br><span class="line-number">506</span><br><span class="line-number">507</span><br><span class="line-number">508</span><br><span class="line-number">509</span><br><span class="line-number">510</span><br><span class="line-number">511</span><br><span class="line-number">512</span><br><span class="line-number">513</span><br><span class="line-number">514</span><br><span class="line-number">515</span><br><span class="line-number">516</span><br><span class="line-number">517</span><br><span class="line-number">518</span><br><span class="line-number">519</span><br><span class="line-number">520</span><br><span class="line-number">521</span><br><span class="line-number">522</span><br><span class="line-number">523</span><br><span class="line-number">524</span><br><span class="line-number">525</span><br><span class="line-number">526</span><br><span class="line-number">527</span><br><span class="line-number">528</span><br><span class="line-number">529</span><br><span class="line-number">530</span><br><span class="line-number">531</span><br><span class="line-number">532</span><br><span class="line-number">533</span><br><span class="line-number">534</span><br><span class="line-number">535</span><br><span class="line-number">536</span><br><span class="line-number">537</span><br><span class="line-number">538</span><br><span class="line-number">539</span><br><span class="line-number">540</span><br><span class="line-number">541</span><br><span class="line-number">542</span><br><span class="line-number">543</span><br><span class="line-number">544</span><br><span class="line-number">545</span><br><span class="line-number">546</span><br><span class="line-number">547</span><br><span class="line-number">548</span><br><span class="line-number">549</span><br><span class="line-number">550</span><br><span class="line-number">551</span><br><span class="line-number">552</span><br><span class="line-number">553</span><br><span class="line-number">554</span><br><span class="line-number">555</span><br><span class="line-number">556</span><br><span class="line-number">557</span><br><span class="line-number">558</span><br><span class="line-number">559</span><br><span class="line-number">560</span><br><span class="line-number">561</span><br><span class="line-number">562</span><br><span class="line-number">563</span><br><span class="line-number">564</span><br><span class="line-number">565</span><br><span class="line-number">566</span><br><span class="line-number">567</span><br><span class="line-number">568</span><br><span class="line-number">569</span><br><span class="line-number">570</span><br><span class="line-number">571</span><br><span class="line-number">572</span><br><span class="line-number">573</span><br><span class="line-number">574</span><br><span class="line-number">575</span><br><span class="line-number">576</span><br><span class="line-number">577</span><br><span class="line-number">578</span><br><span class="line-number">579</span><br><span class="line-number">580</span><br><span class="line-number">581</span><br><span class="line-number">582</span><br><span class="line-number">583</span><br><span class="line-number">584</span><br><span class="line-number">585</span><br><span class="line-number">586</span><br><span class="line-number">587</span><br><span class="line-number">588</span><br><span class="line-number">589</span><br><span class="line-number">590</span><br><span class="line-number">591</span><br><span class="line-number">592</span><br><span class="line-number">593</span><br><span class="line-number">594</span><br><span class="line-number">595</span><br><span class="line-number">596</span><br><span class="line-number">597</span><br><span class="line-number">598</span><br><span class="line-number">599</span><br><span class="line-number">600</span><br><span class="line-number">601</span><br><span class="line-number">602</span><br><span class="line-number">603</span><br><span class="line-number">604</span><br><span class="line-number">605</span><br><span class="line-number">606</span><br><span class="line-number">607</span><br><span class="line-number">608</span><br><span class="line-number">609</span><br><span class="line-number">610</span><br><span class="line-number">611</span><br><span class="line-number">612</span><br><span class="line-number">613</span><br><span class="line-number">614</span><br><span class="line-number">615</span><br><span class="line-number">616</span><br><span class="line-number">617</span><br><span class="line-number">618</span><br><span class="line-number">619</span><br><span class="line-number">620</span><br><span class="line-number">621</span><br><span class="line-number">622</span><br><span class="line-number">623</span><br><span class="line-number">624</span><br><span class="line-number">625</span><br><span class="line-number">626</span><br><span class="line-number">627</span><br><span class="line-number">628</span><br><span class="line-number">629</span><br><span class="line-number">630</span><br><span class="line-number">631</span><br><span class="line-number">632</span><br><span class="line-number">633</span><br><span class="line-number">634</span><br><span class="line-number">635</span><br><span class="line-number">636</span><br><span class="line-number">637</span><br><span class="line-number">638</span><br><span class="line-number">639</span><br><span class="line-number">640</span><br><span class="line-number">641</span><br><span class="line-number">642</span><br><span class="line-number">643</span><br><span class="line-number">644</span><br><span class="line-number">645</span><br><span class="line-number">646</span><br><span class="line-number">647</span><br><span class="line-number">648</span><br><span class="line-number">649</span><br><span class="line-number">650</span><br><span class="line-number">651</span><br><span class="line-number">652</span><br><span class="line-number">653</span><br><span class="line-number">654</span><br><span class="line-number">655</span><br><span class="line-number">656</span><br><span class="line-number">657</span><br><span class="line-number">658</span><br><span class="line-number">659</span><br><span class="line-number">660</span><br><span class="line-number">661</span><br><span class="line-number">662</span><br><span class="line-number">663</span><br><span class="line-number">664</span><br><span class="line-number">665</span><br><span class="line-number">666</span><br><span class="line-number">667</span><br><span class="line-number">668</span><br><span class="line-number">669</span><br><span class="line-number">670</span><br><span class="line-number">671</span><br><span class="line-number">672</span><br><span class="line-number">673</span><br><span class="line-number">674</span><br><span class="line-number">675</span><br><span class="line-number">676</span><br><span class="line-number">677</span><br><span class="line-number">678</span><br><span class="line-number">679</span><br><span class="line-number">680</span><br><span class="line-number">681</span><br><span class="line-number">682</span><br><span class="line-number">683</span><br><span class="line-number">684</span><br><span class="line-number">685</span><br><span class="line-number">686</span><br><span class="line-number">687</span><br><span class="line-number">688</span><br><span class="line-number">689</span><br><span class="line-number">690</span><br><span class="line-number">691</span><br><span class="line-number">692</span><br><span class="line-number">693</span><br><span class="line-number">694</span><br></div></div>`,20),r=[e];function c(o,i,t,b,A,C){return a(),n("div",null,r)}const y=s(p,[["render",c]]);export{u as __pageData,y as default};
